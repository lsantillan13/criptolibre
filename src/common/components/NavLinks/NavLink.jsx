import { NavLink as RouterNavLink } from "react-router-dom";
export default function NavLink({to, children}){
    return(
        <RouterNavLink to={to} className={({ isActive }) => isActive ? 'text-blue-200 underline underline-offset-4 font-normal' : 'text-white hover:underline underline-offset-4 hover:text-blue-400 decoration-blue-500'}>
            {children}
        </RouterNavLink>
    )
};