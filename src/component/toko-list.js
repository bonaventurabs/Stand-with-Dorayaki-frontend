import React, { useState, useEffect } from "react";
import TokoDataService from "../services/toko";
import { Link } from "react-router-dom";

const TokoList = props => {
  const [toko, setToko] = useState([]);
  const [searchNama, setSearchNama] = useState("");
  const [searchKecamatan, setSearchKecamatan] = useState("");
  const [searchProvinsi, setSearchProvinsi] = useState("");

  useEffect(() => {
    retrieveToko();
  }, []);

  const onChangeSearchNama = e => {
    const searchNama = e.target.value;
    setSearchNama(searchNama);
  };

  const onChangeSearchKecamatan = e => {
    const searchKecamatan = e.target.value;
    setSearchKecamatan(searchKecamatan);
  };

  const onChangeSearchProvinsi = e => {
    const searchProvinsi = e.target.value;
    setSearchProvinsi(searchProvinsi);
  };

  const retrieveToko = () => {
    TokoDataService.getAll()
      .then(response => {
        console.log(response.data);
        setToko(response.data.toko);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveToko();
  };

  const find = (query, by) => {
    TokoDataService.find(query, by)
      .then(response => {
        console.log(response.data);
        setToko(response.data.toko);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByNama = () => {
    find(searchNama, "nama")
  };

  const findByKecamatan = () => {
    find(searchKecamatan, "kecamatan")
  };

  const findByProvinsi = () => {
    find(searchProvinsi, "provinsi")
  };

  return (
    <div>
      <div className="row pb-1">
        <div className="input-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Nama toko"
            value={searchNama}
            onChange={onChangeSearchNama}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByNama}  
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Kecamatan"
            value={searchKecamatan}
            onChange={onChangeSearchKecamatan}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByKecamatan}  
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Provinsi"
            value={searchProvinsi}
            onChange={onChangeSearchProvinsi}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByProvinsi}  
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 pb-1">
          <div className="card">
            <div className="card-body">
              <Link to={"/toko/"+toko._id}>
                <h5 className="card-title">{toko.nama}</h5>
              </Link>
              <p className="card-text">
                <strong>Jalan: </strong>{toko.jalan}<br />
                <strong>Kecamatan: </strong>{toko.kecamatan}<br />
                <strong>Provinsi: </strong>{toko.provinsi}
              </p>
              <div className="row">
                <Link to={"/toko/"+toko._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                  Update
                </Link>
                <Link to={"/toko/"+toko._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokoList;