import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../src/App.css";
import thumbdown from "../../images/thumbdown.png";

const AlbumCover = ({ currentSong, deleteASong }) => {
  return (
    <div>
      <div className="App-album-circle">
        <div>
          <p className="App-song-name">{currentSong.title}</p>
          <p>{currentSong.artist}</p>
        </div>

        <div className="App-album-middle">
          <div>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <img
                className="App-album-thumbdown btn-check:focus + .btn-primary, .btn-primary:focus "
                src={thumbdown}
                alt="Thumbsdown"
              />
            </button>
          </div>

          <div className="App-little-circle"></div>
          <div className="App-album-add-delete">+</div>
        </div>

        <div>
          <p>{currentSong.album}</p>
          <p>{currentSong.genre}</p>
          <p>{currentSong.releaseDate}</p>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="App-popup-delete modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Are you sure?
              </h5>
              <button
                type="button"
                className="close x-button-popup"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <b>X</b>
                </span>
              </button>
            </div>
            <div className="modal-body">
              Do you want to delete <b>{currentSong.title}</b> by{" "}
              <b>{currentSong.artist}</b> from your library?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={deleteASong}
                className="btn btn-primary App-popup-comfirm"
                data-dismiss="modal"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCover;
