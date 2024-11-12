import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Collapse,
  ListGroup,
} from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";
import "./Graduation.css"

const videoDataByYear = {
  2010: [
    {
      id: 1,
      title: "1வது பட்டமளிப்பு விழா (2010) பகுதி - 1",
      embedUrl: "https://www.youtube.com/embed/qOAOEB1wgXQ",
    },
    {
      id: 2,
      title: "1வது பட்டமளிப்பு விழா (2010) பகுதி - 2",
      embedUrl: "https://www.youtube.com/embed/FpXJvbJvFog",
    },
    {
      id: 3,
      title: "1வது பட்டமளிப்பு விழா (2010) பகுதி - 3",
      embedUrl: "https://www.youtube.com/embed/xu7le_hSG1w",
    },
    {
      id: 4,
      title: "1வது பட்டமளிப்பு விழா (2010) பகுதி - 4",
      embedUrl: "https://www.youtube.com/embed/YVOdGRogkAQ",
    },
  ],
  2011: [
    {
      id: 1,
      title: "2வது பட்டமளிப்பு விழா (2011) பகுதி - 1",
      embedUrl: "https://www.youtube.com/embed/2FmbyvNuGmo",
    },
    {
      id: 2,
      title: "2வது பட்டமளிப்பு விழா (2011) பகுதி - 2",
      embedUrl: "https://www.youtube.com/embed/OSmy0SmMdYA",
    },
    {
      id: 3,
      title: "2வது பட்டமளிப்பு விழா (2011) பகுதி - 3",
      embedUrl: "https://www.youtube.com/embed/UVAjFWozyV8",
    },
  ],
  2012: [
    {
      id: 1,
      title: "3வது பட்டமளிப்பு விழா (2012) பகுதி - 1",
      embedUrl: "https://www.youtube.com/embed/RSlZLELpr7A",
    },
    {
      id: 2,
      title: "3வது பட்டமளிப்பு விழா (2012) பகுதி - 2",
      embedUrl: "https://www.youtube.com/embed/_KIl-FrOvhU",
    },
    {
      id: 3,
      title: "3வது பட்டமளிப்பு விழா (2012) பகுதி - 3",
      embedUrl: "https://www.youtube.com/embed/gGhvirQhrHw",
    },
    {
      id: 4,
      title: "3வது பட்டமளிப்பு விழா (2012) பகுதி - 4",
      embedUrl: "https://www.youtube.com/embed/c4Gv2Q30uRU",
    },
  ],
  2013: [
    {
      id: 1,
      title: "4வது பட்டமளிப்பு விழா (2013) பகுதி - 1",
      embedUrl: "https://www.youtube.com/embed/1ux0VXlXqlM",
    },
    {
      id: 2,
      title: "4வது பட்டமளிப்பு விழா (2013) பகுதி - 2",
      embedUrl: "https://www.youtube.com/embed/x3zBvXerghk",
    },
    {
      id: 3,
      title: "4வது பட்டமளிப்பு விழா (2013) பகுதி - 3",
      embedUrl: "https://www.youtube.com/embed/2jCG2nQItJk",
    },
    {
      id: 4,
      title: "4வது பட்டமளிப்பு விழா (2013) பகுதி - 4",
      embedUrl: "https://www.youtube.com/embed/F-tbgFYZ6hQ",
    },
  ],
  2014: [
    {
      id: 1,
      title: "5வது பட்டமளிப்பு விழா (2014) பகுதி - 1",
      embedUrl: "https://www.youtube.com/embed/-d1cpXD6TY0",
    },
    {
      id: 2,
      title: "5வது பட்டமளிப்பு விழா (2014) பகுதி - 2",
      embedUrl: "https://www.youtube.com/embed/z4NDM_3vcFI",
    },
    {
      id: 3,
      title: "5வது பட்டமளிப்பு விழா (2014) பகுதி - 3",
      embedUrl: "https://www.youtube.com/embed/3MLJCXUXFrM",
    },
    {
      id: 4,
      title: "5வது பட்டமளிப்பு விழா (2014) பகுதி - 4",
      embedUrl: "https://www.youtube.com/embed/qoOkrbZGaLQ",
    },
  ],
  2015: [
    {
      id: 1,
      title: "6வது பட்டமளிப்பு விழா (2015) பகுதி - 1",
      embedUrl: "https://www.youtube.com/embed/rrd4lr2HW3A",
    },
    {
      id: 2,
      title: "6வது பட்டமளிப்பு விழா (2015) பகுதி - 2",
      embedUrl: "https://www.youtube.com/embed/ugDI0WepEvA",
    },
    {
      id: 3,
      title: "6வது பட்டமளிப்பு விழா (2015) பகுதி - 3",
      embedUrl: "https://www.youtube.com/embed/Nf7xzpMX6m0",
    },
    {
      id: 4,
      title: "6வது பட்டமளிப்பு விழா (2015) பகுதி - 4",
      embedUrl: "https://www.youtube.com/embed/EPem-HgZcjk",
    },
  ],
  2016: [
    {
      id: 1,
      title: "7வது பட்டமளிப்பு விழா (2016) பகுதி - 1",
      embedUrl: "https://www.youtube.com/embed/V9KdUTaNc4A",
    },
    {
      id: 2,
      title: "7வது பட்டமளிப்பு விழா (2016) பகுதி - 2",
      embedUrl: "https://www.youtube.com/embed/QSjPIerqBn0",
    },
    {
      id: 3,
      title: "7வது பட்டமளிப்பு விழா (2016) பகுதி - 3",
      embedUrl: "https://www.youtube.com/embed/beolwf8lrwQ",
    },
  ],
  2017: [
    {
      id: 1,
      title: "8வது பட்டமளிப்பு விழா (2017) பகுதி - 1",
      embedUrl: "https://www.youtube.com/embed/AIXGdNF14SA",
    },
    {
      id: 2,
      title: "8வது பட்டமளிப்பு விழா (2017) பகுதி - 2",
      embedUrl: "https://www.youtube.com/embed/ac-uWNWu5Lo",
    },
    {
      id: 3,
      title: "8வது பட்டமளிப்பு விழா (2017) பகுதி - 3",
      embedUrl: "https://www.youtube.com/embed/1uu8PdAaB70",
    },
  ],
  2018: [
    {
      id: 1,
      title: "9வது பட்டமளிப்பு விழா (2018) பகுதி - 1",
      embedUrl: "https://www.youtube.com/embed/HvIpdC9KuyM",
    },
    {
      id: 2,
      title: "9வது பட்டமளிப்பு விழா (2018) பகுதி - 2",
      embedUrl: "https://www.youtube.com/embed/tFvluJUQ0c4",
    },
    {
      id: 3,
      title: "9வது பட்டமளிப்பு விழா (2018) பகுதி - 3",
      embedUrl: "https://www.youtube.com/embed/tdQqevmFx-g",
    },
  ],
  2019: [
    {
      id: 1,
      title: "10வது பட்டமளிப்பு விழா (2019) பகுதி - 1",
      embedUrl: "https://www.youtube.com/embed/3T7EY6yXUXk",
    },
    {
      id: 2,
      title: "10வது பட்டமளிப்பு விழா (2019) பகுதி - 2",
      embedUrl: "https://www.youtube.com/embed/6H2v60uhnek",
    },
    {
      id: 3,
      title: "10வது பட்டமளிப்பு விழா (2019) பகுதி - 3",
      embedUrl: "https://www.youtube.com/embed/AQWgDVHX0nA",
    },
  ],
};

// Component for the playlist of a specific year
const YearPlaylist = ({ year, videos }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">ஆண்டு {year}</h5>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls={`collapse-${year}`}
          aria-expanded={open}
          variant="outline-primary"
        >
          {open ? "வீடியோக்களை மறை" : "வீடியோக்களை காட்டு"}
        </Button>
      </Card.Header>
      <Collapse in={open}>
        <Card.Body id={`collapse-${year}`}>
          <ListGroup variant="flush">
            {videos.map((video) => (
              <ListGroup.Item key={video.id} className="mb-3">
                <h6>{video.title}</h6>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={video.embedUrl}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Collapse>
    </Card>
  );
};

export default function Graduation() {
  return (
    <>
      <Navbar />
      <section className="margin-top-section">
        <Container className="my-5 mt-5">
          <Row className="text-center mb-5">
            <h1>ஆண்டு வாரியாக பட்டப்படிப்பு வீடியோக்கள்</h1>
            <p className="mt-2">
              2010 முதல் 2019 வரை ஆண்டு வாரியான பட்டப்படிப்பு பிளேலிஸ்ட்களை
              ஆராயுங்கள்
            </p>
          </Row>
          <Row>
            <Col>
              {Object.entries(videoDataByYear).map(([year, videos]) => (
                <YearPlaylist key={year} year={year} videos={videos} />
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
