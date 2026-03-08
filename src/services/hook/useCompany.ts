import { useQuery } from '@tanstack/react-query';
import { companyService } from '../api/company.service';

export const useCompanyProfile = () => {
    return useQuery({
        queryKey: ['company'],
        queryFn: companyService.getCompanyProfile,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};
