import { ROUTES } from '../../constants/routes';


//checando se a rota é publica
export const checkPublicRoutes = (asPath: string) => {
    const public_routes = Object.values(ROUTES.public);
    return public_routes.includes(asPath);
}
