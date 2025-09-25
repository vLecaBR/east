import React, { useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(160px,1fr));
  gap:12px;
`;

const Thumb = styled.button`
  border:0;
  padding:0;
  background:transparent;
  border-radius:8px;
  overflow:hidden;
  box-shadow:0 8px 18px rgba(0,0,0,0.06);
`;

const Modal = styled.div`
  position:fixed;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(0,0,0,0.6);
  z-index:100;
`;

const ModalImg = styled.img`
  max-width:90%;
  max-height:80%;
  border-radius:8px;
`;

export default function Gallery(){
  // imagens na pasta public/gallery/*.jpg (acessíveis via "/gallery/1.jpg")
  const images = ["/gallery/1.jpg","/gallery/2.jpg","/gallery/3.jpg","/gallery/4.jpg"];
  const [sel, setSel] = useState(null);

  return (
    <>
      <h2>Galeria</h2>
      <p>Fotos de serviços e projetos realizados.</p>
      <Grid>
        {images.map((src, i) => (
          <Thumb key={i} onClick={() => setSel(src)} aria-label={`Abrir imagem ${i+1}`}>
            <img src={src} alt={`Projeto ${i+1}`} style={{width:"100%", height:180, objectFit:"cover"}} />
          </Thumb>
        ))}
      </Grid>

      {sel && (
        <Modal onClick={() => setSel(null)}>
          <ModalImg src={sel} alt="ampliada" onClick={(e)=> e.stopPropagation()} />
        </Modal>
      )}
    </>
  );
}
