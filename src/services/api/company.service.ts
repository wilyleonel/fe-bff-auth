import axios from 'axios';
import { apiConfig } from './api.config';
import type { ICompany } from './company.interface.dto';

const companyApi = axios.create({
    baseURL: apiConfig.baseUrl,
    withCredentials: apiConfig.withCredentials,
});

export const companyService = {
    getCompanyProfile: async (): Promise<ICompany> => {
        const response = await companyApi.get('/company');
        return response.data;
    },
};
