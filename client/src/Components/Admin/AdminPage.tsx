import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import "../../styles/admin.scss";
import Modal from "./Modal";
import { FetchData } from "../../types";
import { SERVER_URL } from "../../config/api.config";
import { removeTokenFromStorage } from "../../service/token.service";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const AdminPage = () => {
  const { data, loading, refresh } = useFetch("/");

  const { logOut } = useLogout();

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [initialData, setInitialData] = useState<FetchData | null>(null);
  const [url, setUrl] = useState("");

  const openModal = (data: FetchData) => {
    setInitialData(data);
    setIsModalOpen(true);
  };

  const openModelCreateData = () => {
    setUrl("feature");
    setIsCreate(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsCreate(false);
    setInitialData(null);
    refresh();
  };

  const logout = () => {
    logOut();
    removeTokenFromStorage();
    navigate("/");
  };

  return (
    <>
      <div className="admin">
        <h2 className="admin__title">ADMIN PANEL</h2>
        <button onClick={logout} className="admin__btn">
          Logout
        </button>
      </div>
      {loading && <div>Загрузка...</div>}
      {data && (
        <>
          <h4 className="admin-title">Главная</h4>
          {
            <div className="grid-table">
              <div>{data.title}</div>
              <div>{data.description}</div>
              <div className="grid-table__img">
                <img
                  src={`${SERVER_URL}${data.image}`}
                  alt={data.image}
                  width={52}
                />
              </div>
              <div
                className="grid-table__edit"
                onClick={() => {
                  openModal(data);
                  setUrl("hero");
                }}
              >
                Изменить
              </div>
            </div>
          }
          <h4 className="admin-title">Преимущества</h4>
          <button onClick={openModelCreateData}>Создать</button>
          {data.feature?.map((item) => (
            <div className="grid-table" key={item.id}>
              <div>{item.title}</div>
              <div>{item.description}</div>
              <div className="grid-table__img">
                <img
                  src={`${SERVER_URL}${item.image}`}
                  alt={item.image}
                  width={52}
                />
              </div>
              <div
                className="grid-table__edit"
                onClick={() => {
                  openModal(item);
                  setUrl("feature");
                }}
              >
                Изменить
              </div>
            </div>
          ))}
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            initialData={initialData}
            url={url}
          />
          {isCreate && (
            <Modal
              isOpen={isCreate}
              onClose={closeModal}
              initialData={null}
              url={url}
            />
          )}
        </>
      )}
    </>
  );
};

export default AdminPage;
