import { Router } from "express"
import { autenticado } from "./middleware/authToken"
import multer from 'multer'
import uploadConfig from './config/multer'

const upload = multer(uploadConfig.upload('./tmp'))
const router = Router()
export { router }

//Criar
import { CriarUsuarioController } from "./Controllers/Usuario/CriarUsuarioController"
import { CriarClientesController } from "./Controllers/Clientes/CriarClientesController"
import { CriarProdutosController } from "./Controllers/Produtos/CriarProdutosController"

//Listar
import { ListarUsuarioController } from "./Controllers/Usuario/ListarUsuarioController"
import { ListarClientesController } from "./Controllers/Clientes/ListarClientesController"
import { ListarProdutosController } from "./Controllers/Produtos/ListarProdutosController"

//ListarUnico
import { ListarUnicoUsuarioController } from "./Controllers/Usuario/ListarUnicoUsuarioController"
import { ListarClienteUnicoController } from "./Controllers/Clientes/ListarClienteUnicoController"
import { ListarProdutoUnicoController } from "./Controllers/Produtos/ListarProdutoUnicoController"

//Deletar
import { DeletarUsuarioController } from "./Controllers/Usuario/DeletarUsuarioController"
import { DeletarClientesController } from "./Controllers/Clientes/DeletarClientesController"

//Alterar
import { AlterarUsuarioController } from "./Controllers/Usuario/AlterarUsuarioController"
import { AlterarClientesController } from "./Controllers/Clientes/AlterarClientesController"
import { AlterarProdutoController } from "./Controllers/Produtos/AlterarProdutosController"

//Login
import { LoginUsuarioController } from "./Controllers/Usuario/LoginUsuarioController"


//--------------------\\

//Usuário

router.post("/CriarUsuario", new CriarUsuarioController().handle)
router.get("/ListarUsuario", autenticado, new ListarUsuarioController().handle)
router.get("/ListarUnicoUsuario", autenticado, new ListarUnicoUsuarioController().handle)
router.delete("/DeletarUsuario", autenticado, new DeletarUsuarioController().handle)
router.put("/AlterarUsuario", autenticado, new AlterarUsuarioController().handle)
router.post("/Login", new LoginUsuarioController().handle)

//Cliente

router.post('/CriarCliente', autenticado, new CriarClientesController().handle )
router.get('/ListarCliente', autenticado,  new ListarClientesController().handle)
router.get('/ListarUnicoCliente/:id', autenticado, new ListarClienteUnicoController().handle)
router.put('/AlterarCliente', autenticado,  new AlterarClientesController().handle)
router.delete('/DeletarCliente', autenticado, new DeletarClientesController().handle)

//Produto

router.post('/CriarProduto', upload.single('file') ,new CriarProdutosController().handle)
router.get('/ListarProduto', new ListarProdutosController().handle)
router.get('/ListarUnicoProduto/:id', new ListarProdutoUnicoController().handle)
router.put('/AlterarProduto', new AlterarProdutoController().handle)
//apagar