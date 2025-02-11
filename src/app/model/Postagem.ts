import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public id: number
    public titulo: string
    public conteudo: string
    public data: Date
    public usuario: User
    public tema: Tema
}