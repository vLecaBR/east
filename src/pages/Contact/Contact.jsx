import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display:grid;
  gap:10px;
  max-width: 560px;
`;

const Input = styled.input`
  padding:10px;
  border-radius:8px;
  border:1px solid rgba(0,0,0,0.08);
`;

const Textarea = styled.textarea`
  padding:10px;
  border-radius:8px;
  border:1px solid rgba(0,0,0,0.08);
  resize:vertical;
  min-height:120px;
`;

const Button = styled.button`
  background: ${({theme}) => theme.colors.primary};
  color:white;
  border:0;
  padding:10px 14px;
  border-radius:8px;
`;

export default function Contact(){
  const [form, setForm] = useState({name:"", email:"", phone:"", msg:""});

  function handleChange(e){
    const {name, value} = e.target;
    setForm(prev => ({...prev, [name]: value}));
  }

  function handleSubmit(e){
    e.preventDefault();
    // implementação simples: abrir mailto (fácil de testar). Para produção, integrar Formspree / backend.
    const subject = encodeURIComponent(`Orçamento - ${form.name}`);
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\n\nMensagem:\n${form.msg}`);
    window.location.href = `mailto:seu-email@exemplo.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <h2>Contato</h2>
      <p>Quer orçar? Manda uma mensagem que a gente responde rapidinho.</p>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" value={form.name} onChange={handleChange} required />
        <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <Input name="phone" placeholder="Telefone" value={form.phone} onChange={handleChange} />
        <Textarea name="msg" placeholder="Como podemos ajudar?" value={form.msg} onChange={handleChange} required />
        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
}
