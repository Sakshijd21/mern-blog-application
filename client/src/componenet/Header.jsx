import { Navbar,  NavbarLink, TextInput } from "flowbite-react";
import { Link} from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import { Button } from "flowbite-react";
import {FaMoon } from 'react-icons/fa';




export default function Header(){
    return(
        <Navbar className="border-b-2 flex justify-between items-center">
            <Link to="/" className="self-center whitespace-nowrap text-sm
                                    sm:text-xl font-semibold dark:text-white">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-600
                               via-purple-500 to-pink-500 rounded-lg text-white ">Sakshi's</span> Blog
            
            </Link>
            <div className="flex items-center space-x-4">
              <form>
                <div className="relative hidden lg:inline">
                   <AiOutlineSearch className="absolute top-3 left-14 transform -translate-y-1/2 text-gray-500" />
                <TextInput
                    type="text"
                    placeholder="Search.."
                    
                    className="pl-10 w-full"
                />
                </div>
               </form>
                <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                 <AiOutlineSearch />
                 
                 </Button>
                 <div className=" flex items-center gap-2 md:order-2">
                   <Button className="w-12 h-10 hidden sm:inline" color="black" pill>
                        <FaMoon />
                    </Button>
                    <Link to='/sign-in'>
                    <Button className="bg-purple-500 hover:bg-pink-500 text-fuchsia-50 font-bold w-18 h-10  justify-center items-center px-6 py -2 rounded">
                        Sign In
                    </Button>
                    
                    </Link>
                 </div>   
                    <ul className="flex items-center gap-4 font-bold">
                        <li>
                        <NavbarLink as={Link} to='/home'>
                            Home
                        </NavbarLink>
                        </li>
                        <li>
                        <NavbarLink as={Link} to='/about'>
                            About
                        </NavbarLink>
                        </li>
                        <li>
                        <NavbarLink as={Link} to='/projects'>
                            Project
                        </NavbarLink>
                        </li>
                        </ul>
                       
                       
                   
                  </div>
                 
        
        
        </Navbar>
    );
}