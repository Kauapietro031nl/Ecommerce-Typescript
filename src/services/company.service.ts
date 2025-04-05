import { NotFoundError } from "../errors/not-found.err";
import { Company } from "../models/company.models";
import { CompanyRepository } from "../repositories/company.repository";


export class CompanyService {

    private companyRepository: CompanyRepository


    constructor() {
        this.companyRepository = new CompanyRepository();

    }

    async getAll(): Promise<Company[]> {

        return this.companyRepository.getAll()

    }


    async getById(id: string): Promise<Company> {

        const company = await this.companyRepository.GetById(id)

        if (!company) {

            throw new NotFoundError("Empresa não encontrada !")


        } else {
            return company;
        }
    }

    async save(company: Company): Promise<void> {

        await this.companyRepository.save(company)
    }

    async update(id: string, company: Company): Promise<void> {

        const _company = await this.companyRepository.GetById(id)

        if (!_company) {
            throw new NotFoundError("Empresa não encontrado !");
        }
            _company.logomarca = company.logomarca;
            _company.cpfCnpj = company.cpfCnpj;
            _company.razaoSocial = company.razaoSocial;
            _company.nomeFantasia = company.nomeFantasia;
            _company.telefone = company.telefone;
            _company.horarioFuncionamento = company.horarioFuncionamento;
            _company.horarioFuncionamento;
            _company.endereco = company.endereco;
            _company.localizacao = company.localizacao;
            _company.taxaEntrega = company.taxaEntrega;
            _company.ativa = company.ativa;

        await this.companyRepository.update(_company);

    }


}