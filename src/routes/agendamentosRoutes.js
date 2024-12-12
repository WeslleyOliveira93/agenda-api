import { Router } from "express";
import Agendamento from "../database/agendamento.js";

const imagem =  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgflip.com%2Fmemegenerator%2F262093548%2Ffallen-server-rack-servidor-caido&psig=AOvVaw18Zz-4tLs0mf_oPJJVWtFp&ust=1733952605892000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiKz7KTnooDFQAAAAAdAAAAABAE"


const agendamentosRoutes = Router();

agendamentosRoutes.get("/agendamentos", async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll();
    res.json(agendamentos);
  } catch (erro) {
    console.log(erro)
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
      imagem
    ,
    });
  }
});

agendamentosRoutes.get("/agendamentos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const agendamento = await Agendamento.findByPk(id);

    if (agendamento) {
      res.json(agendamento);
    } else {
      res.status(404).json({
        mensagem: "Agendamento não encontrado.",
        imagem
      });
    }
  } catch (erro) {
    console.log(erro)
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
      imagem,
    });
  }
});

agendamentosRoutes.post("/agendamentos", async (req, res) => {
    try {
        const dados = req.body;
        const salvo = await Agendamento.create(dados);
        res.json(salvo);
    }
    catch(erro) {
      console.log(erro)
        res.status(500).json({
            mensagem: "Erro interno no servidor. Tente mais tarde.",
            imagem
            
        });
    }
});

agendamentosRoutes.put("/agendamentos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const dados = req.body;
        const agendamento = await Agendamento.findByPk(id);

        if(agendamento) {
            await agendamento.update(dados);
            res.json(agendamento);
        } else {
            res.status(404).json({
                mensagem: "Horário não encontrado."
            });
        }
    }
    catch(erro) {
        res.status(500).json({
            mensagem: "Erro interno no servidor. Tente mais tarde.",
            imagem
        });
    }
});

agendamentosRoutes.delete("/agendamentos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const agendamento = await Agendamento.findByPk(id);

        if(agendamento) {
            await agendamento.destroy();
            res.json({ mensagem: "Agendamento removido." });
        } else {
            res.status(404).json({
                mensagem: "Agendamento não encontrado."
            });
        }
    }
    catch(erro) {
        res.status(500).json({
            mensagem: "Erro interno no servidor. Tente mais tarde.",
            imagem,
        });
    }
});



export default agendamentosRoutes;
