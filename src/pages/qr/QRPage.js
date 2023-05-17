import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "components/MainLayout";
import { Helmet } from "react-helmet";
import { Button, Col, Row } from "react-bootstrap";
import QRCode from "react-qr-code";
import { multilanguage } from "redux-multilanguage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faShare } from "@fortawesome/free-solid-svg-icons";
import { shareOnMobile } from "react-mobile-share";

const QRPage = ({ history, strings }) => {
  const { user: authUser } = useSelector((state) => state.auth);
  const { rehydrated } = useSelector((state) => state._persist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rehydrated) {
      if (!authUser) {
        history.push("/login");
      }
    }
  }, [history, authUser, dispatch, rehydrated]);

  return (
    <MainLayout>
      {authUser ? (
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{authUser.username} - Fastest Network Technology</title>
          </Helmet>

          <Row className="mt-2">
            <Col md={4} />
            <Col md={4} className="text-center">
              <img
                src="logo.png"
                alt=""
                style={{ width: "120px", marginBottom: "50px" }}
              />
              <h3>{strings["Share QR Code"]}</h3>
              <div
                style={{
                  background: "white",
                  padding: "16px",
                }}
                className="mt-5"
              >
                <QRCode
                  value={`https://app.infocard.me/${authUser.username}`}
                  size={180}
                />
              </div>
              <p>{`app.infocard.me/${authUser.username}`}</p>
              <Button
                type="submit"
                variant="outline-primary"
                className="m-2 rounded-circle bordered"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://app.infocard.me/${authUser.username}`
                  );
                  toast("Link copied");
                }}
              >
                <FontAwesomeIcon icon={faCopy} size="lg" />
              </Button>

              <Button
                type="submit"
                variant="outline-primary"
                size="md"
                className="m-2 rounded-circle"
                onClick={() => {
                  shareOnMobile({
                    url: `https://app.infocard.me/${authUser.username}`,
                    title: "Connect to my profile using this link",
                  });
                }}
              >
                <FontAwesomeIcon icon={faShare} size="lg" />
              </Button>

              <ToastContainer
                bodyClassName={() => "text-sm font-med block p-3"}
                position="bottom-left"
                autoClose={2000}
              />
            </Col>
            <Col md={4} />
          </Row>
        </Fragment>
      ) : (
        <></>
      )}
    </MainLayout>
  );
};

export default multilanguage(QRPage);
