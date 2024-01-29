import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Card from "react-bootstrap/Card";
import { riproduci } from "../../slice/inRiproduzioneSlice";
import { aggiungiPreferiti, togliPreferiti } from "../../slice/preferitiSlice";

export default function ListaTracceArtista() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tracceArtista = useSelector((state) => state.chiamataArtista.tracce);
  const successo = useSelector((state) => state.chiamataArtista.successo[1]);
  let preferiti = useSelector((state) => state.preferiti.preferiti);
  console.log(preferiti);
  useEffect(() => {
    console.log(tracceArtista, successo);
  }, []);

  return (
    <>
      <div className="container bg-transparent pt-3 listaPrincipale">
        {successo &&
          tracceArtista.map((ele, index) => (
            <div className="row mb-3" key={ele.id}>
              <div className="col-1 text-end ms-3 d-flex align-items-center justify-content-end play">
                <span className="indice me-4">{index + 1}</span>
              </div>
              <div className="col-1 ps-0 pe-2 me-4">
                <img
                  onClick={() => dispatch(riproduci(ele))}
                  src={ele.album.cover_small}
                  alt="Song ${i + 1}"
                  className="rounded manina"
                  style={{ width: 50, height: 50, objectFit: "cover" }}
                />
              </div>
              <div
                className="col-5 truncate-text align-items-center px-0"
                onClick={() => dispatch(riproduci(ele))}
              >
                <span className="truncate-text mb-0 title d-block manina">
                  {ele.title}
                </span>

                <OverlayTrigger
                  placement="auto-start"
                  overlay={
                    <Popover id={`popover-positioned-${ele.id}`}>
                      <Card
                        style={{ width: "8rem" }}
                        className="d-flex flex-row border border-2 border-secondary"
                      >
                        <Card.Img variant="top" src={ele.album.cover_medium} />
                        <Card.Body className="border border-2 border-secondary text-light bg-black">
                          <Card.Title style={{ width: "10rem" }}>
                            Vai all'album!
                          </Card.Title>
                          <Card.Text>
                            <strong>Album</strong>: {ele.album.title}
                          </Card.Text>
                          <Card.Text>
                            <strong>Artist</strong>: {ele.artist.name}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Popover>
                  }
                >
                  <small
                    className="truncate-text mb-0 title d-block text-light manina"
                    onClick={() => {
                      navigate("/album/" + ele.album.id);
                    }}
                  >
                    {ele.album.title}
                  </small>
                </OverlayTrigger>
              </div>

              <div className="col-3 d-flex align-items-center colAscolti">
                <span className="ascolti">
                  {ele.rank.toLocaleString("it-IT")}
                </span>
              </div>
              <div className="col-md-1 col-3 d-flex justify-content-between">
                <span className="durata text-center">
                  {Math.floor(ele.duration / 60)}:{ele.duration % 60}{" "}
                  <a className="cuoricino manina mb-5">
                    {!preferiti.includes(ele.id) ? (
                      <i class="bi bi-suit-heart"
                        onClick={() => {dispatch(aggiungiPreferiti(ele.id))}}
                      ></i>
                    ) : (
                      <i
                        class="bi bi-heart-fill"
                        onClick={() => dispatch(togliPreferiti(ele.id))}
                      ></i>
                    )}
                  </a>
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
