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
              data-target="#deleteModal"
            >
              <img
                className="App-album-thumbdown btn-check:focus + .btn-primary, .btn-primary:focus "
                src={thumbdown}
                alt="Thumbsdown"
              />
            </button>
          </div>

          <div className="App-little-circle"></div>
          <div className="App-album-add-delete">
            <button
              type="button"
              className="btn btn-primary App-album-add-delete"
              style={{ display: "contents" }}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <p>{currentSong.album}</p>
          <p>{currentSong.genre}</p>
          <p>{currentSong.releaseDate}</p>
        </div>
      </div>
      <div
        className="modal fade"
        id="deleteModal"
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

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Enter new song information:
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
              <form>
                <div className="form-group">
                  <label for="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="emailHelp"
                    placeholder="Enter Song Title"
                  />
                </div>
                <div className="form-group">
                  <label for="artist">Artist</label>
                  <input
                    type="text"
                    className="form-control"
                    id="artist"
                    placeholder="Enter the song's Artist"
                  />
                </div>
                <div className="form-group">
                  <label for="album">Album</label>
                  <input
                    type="text"
                    className="form-control"
                    id="album"
                    aria-describedby="emailHelp"
                    placeholder="Enter the Album"
                  />
                </div>
                <div className="form-group">
                  <label for="genre">Genre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    placeholder="Enter the genre"
                  />
                </div>
                <div className="form-group">
                  <label for="releaseDate">Release Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="releaseDate"
                    placeholder="Enter the release date"
                  />
                </div>
                <div className="form-check"></div>
                <button
                  type="submit"
                  className="btn btn-primary App-popup-comfirm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCover;
