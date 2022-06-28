import React, { useState } from "react";
import { Form } from "react-bootstrap";
import TopBar from "../components/TopBar/TopBar";
import "./recherchedoctor.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReactPaginate from "react-paginate";
const data = [
  {
    name: 'ousmane',
    poste: 'diabeto',
    incon: <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
  },
  {
    name: 'ibrahime',
    poste: 'diabeto',
    incon: <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
  },
  {
    name: 'rafael',
    poste: 'diabeto',
    incon: <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
  },
  {
    name: 'ibrahime',
    poste: 'diabeto',
    incon: <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
  },
  {
    name: 'ibrahime',
    poste: 'diabeto',
    incon: <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
  },
  {
    name: 'ibrahime',
    poste: 'diabeto',
    incon: <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
  },
  {
    name: 'ibrahime',
    poste: 'diabeto',
    incon: <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
  },
  {
    name: 'ibrahime',
    poste: 'diabeto',
    incon: <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
  },
  {
    name: 'ibrahime',
    poste: 'diabeto',
    incon: <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
  },
  {
    name: 'ibrahime',
    poste: 'diabeto',
    incon: <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
  },
]
const per_page = 6
function RechercheDoctor() {
  const [currentpage, setCurrentpage] = useState(0)
  const handlePageClic = ({ selected }) => {
    setCurrentpage(selected)
  }
  const offset = currentpage * per_page;
  const currentPageDate = data.slice(offset, offset + per_page).map((item, index) => {
    return (
      <div key={index}>
        <ul className="memu_doc">
          <li className="menu_im">
            {item.incon}
            <div className="doc_list">
              <span style={{ fontWeight: "bold" }}>{item.name}</span>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                {item.poste}
              </span>
              <br></br>
              <button>Suspendre</button>
            </div>
          </li>
        </ul>
      </div>
    )
  })
  const page_count = Math.ceil(data.length / per_page)
  return (
    <div className="Rech_container">
      <TopBar />
      <div className="top">
        <div className="search">
          <h2>Filter Par Ville</h2>
          <Form.Select
            style={{
              width: "100%",
              height: "40px",
              marginBottom: "5px",
            }}
          >
            <option>Select</option>
          </Form.Select>
        </div>
        <div className="search">
          <h2>Filter Par Spécialité</h2>
          <Form.Select
            style={{
              width: "100%",
              height: "40px",

              marginBottom: "5px",
            }}
          >
            <option>Select</option>
          </Form.Select>
        </div>
        <div className="search">
          <h2>Filter Par Hopital</h2>
          <Form.Select
            style={{
              width: "100%",
              height: "40px",
              marginBottom: "5px",
            }}
          >
            <option>Select</option>
          </Form.Select>
        </div>
      </div>
      <div className="body_doctor">
        {currentPageDate}
        <ReactPaginate
          previousLabel={<ArrowBackIosNewIcon style={{ height: '15px' }} />}
          nextLabel={<ArrowForwardIosIcon style={{ height: '15px' }} />}
          pageCount={page_count}
          onPageChange={handlePageClic}
          containerClassName={"classe_pagination"}
          previousLinkClassName={"classe_previous"}
          nextLinkClassName={"class_next"}
          disabledClassName={"classe_desactive"}
          activeClassName={"classe_active"} />








        {/*<ul className="memu_doc">
          <li className="menu_im">
            <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
            <div className="doc_list">
              <span style={{ fontWeight: "bold" }}>Ousmane Camara</span>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Diabetique
              </span>
              <br></br>
              <button>Suspendre</button>
            </div>
          </li>
        </ul>
        <ul className="memu_doc">
          <li className="menu_im">
            <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
            <div className="doc_list">
              <span style={{ fontWeight: "bold" }}>Ousmane Camara</span>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Diabetique
              </span>
              <br></br>
              <button>Suspendre</button>
            </div>
          </li>
        </ul>
      
      
        <ul className="memu_doc">
          <li className="menu_im">
            <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
            <div className="doc_list">
              <span style={{ fontWeight: "bold" }}>Ousmane Camara</span>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Diabetique
              </span>
              <br></br>
              <button>Suspendre</button>
            </div>
          </li>
        </ul>
        <ul className="memu_doc">
          <li className="menu_im">
            <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
            <div className="doc_list">
              <span style={{ fontWeight: "bold" }}>Ousmane Camara</span>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Diabetique
              </span>
              <br></br>
              <button>Suspendre</button>
            </div>
          </li>
        </ul>
        <ul className="memu_doc">
          <li className="menu_im">
            <AccountCircleIcon style={{ height: "80px", width: "80px" }} />
            <div className="doc_list">
              <span style={{ fontWeight: "bold" }}>Ousmane Camara</span>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Diabetique
              </span>
              <br></br>
              <button>Suspendre</button>
            </div>
          </li>
        </ul>*/}



      </div>
    </div>
  );
}

export default RechercheDoctor;
