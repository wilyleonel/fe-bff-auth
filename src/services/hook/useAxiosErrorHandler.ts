import { useState } from 'react';
import { AxiosError } from 'axios';

/**
 * Hook para manejar errores de Axios de forma consistente
 * @returns Objeto con estado de error y función para manejar errores
 */
export function useAxiosErrorHandler() {
    const [error, setError] = useState<string>('');

    /**
     * Procesa un error y extrae el mensaje apropiado
     * @param err Error capturado (puede ser AxiosError, Error, o cualquier cosa)
     * @param defaultMessage Mensaje por defecto si no se puede extraer uno específico
     * @returns El mensaje de error procesado
     */
    const handleError = (err: unknown, defaultMessage = 'Ha ocurrido un error'): string => {
        let errorMessage = defaultMessage;

        if (err instanceof AxiosError) {
            // Prioridad: mensaje del backend → mensaje de Axios → mensaje por defecto
            errorMessage = err.response?.data?.message ||
                err.message ||
                defaultMessage;
        } else if (err instanceof Error) {
            errorMessage = err.message;
        }

        setError(errorMessage);
        console.error('Error procesado:', err);
        return errorMessage;
    };

    /**
     * Limpia el estado de error
     */
    const clearError = () => {
        setError('');
    };

    return {
        error,
        setError,
        handleError,
        clearError
    };
}