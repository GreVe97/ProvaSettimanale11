import React, { useEffect, useState } from "react";
import BarraNavigazione from "../BarraNavigazione";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

export default function CopertinaAlbum() {
  const chiamataAlbum = useSelector(
    (state) => state.chiamataAlbum.chiamataAlbum
  );
  const loading = useSelector((state) => state.chiamataAlbum.loading);
  const successo = useSelector((state) => state.chiamataAlbum.successo);

  useEffect(() => {}, [chiamataAlbum]);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          {" "}
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <div className="card bg-dark text-white border border-0">
          {successo && (
            <img
              className="card-img bannerimg cardSizing container-fluid px-0 copertinaAlbumLarge"
              id="bannerArtist"
              src={chiamataAlbum.cover_xl}
              alt="Card image"
            />
          )}
          <div className="card-img-overlay">
            <BarraNavigazione />
            <div className="custom-mt">
              {successo && (
                <img
                  className="copertinaAlbumSmall rounded-1 me-3"
                  src={chiamataAlbum.cover_medium}
                  alt=""
                  style={{ width: 180, height: 180 }}
                />
              )}
              <div className="albumInfo">
                <p className="px-2">ALBUM</p>
                {successo && (
                  <>
                    {" "}
                    <h1 className="card-title truncate-text albumName">
                      {chiamataAlbum.title}
                    </h1>
                    <p
                      className="mt-3 artistAlbumName truncate-text"
                      id="fansArtist"
                    >
                      {chiamataAlbum.artist.name}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
