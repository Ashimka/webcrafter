import { useEffect, useState } from "react";
import "../../styles/modal.scss";
import { FetchData } from "../../types";
import { SERVER_URL } from "../../config/api.config";
import { useDeleteFile } from "../../hooks/useDeleteFile";
import { useCreate } from "../../hooks/useCreate";

type FileUpload = {
  message: string;
  path: string;
};

const Modal = ({
  isOpen,
  onClose,
  initialData,
  url,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: FetchData | null;
  url: string;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | undefined>("");

  const { fetchCreate } = useCreate();
  const { fetchDeleteFile } = useDeleteFile(image);

  useEffect(() => {
    if (isOpen && initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setImage(initialData.image);
    }
  }, [isOpen, initialData]);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    try {
      if (file) {
        const fileDada = new FormData();
        fileDada.append("image", file);

        const fetchFile = async (fileDada: FormData) => {
          const response = await fetch(`/api/admink/upload`, {
            method: "POST",
            credentials: "include",
            body: fileDada,
          });

          const data: FileUpload = await response.json();

          setImage(data.path);
        };

        fetchFile(fileDada);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dataUpdate = async (dataUpdate: FetchData) => {
    await fetch(`/api/admink/${url}/${initialData?.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(dataUpdate),
    });

    setImage("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    initialData && dataUpdate({ title, description, image });

    initialData === null && fetchCreate({ title, description, image }, url);

    onClose();
  };

  const clickDeleteFile = () => {
    fetchDeleteFile();
    setImage("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &#10006;
        </span>

        <form
          onSubmit={handleSubmit}
          className="modal__form form"
          encType="multipart/form-data"
        >
          {image && (
            <div className="form__image">
              <img src={`${SERVER_URL}${image}`} alt="photo" width={80} />
              <span title="удалить" onClick={clickDeleteFile}>
                &#10006;
              </span>
            </div>
          )}
          <input
            type="file"
            name="image"
            id="image"
            accept=".png, .jpg, .jpeg, .webp, .svg"
            onChange={handleFile}
          />
          <input
            className="form__input"
            type="text"
            id="title"
            value={title}
            placeholder="Заголовок"
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="form__input"
            name="text"
            rows={5}
            id="description"
            value={description}
            placeholder="Описание"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <button type="submit" className="form__btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
