import Card from "../Components/Card";
import Home from "../Routes/Home";
import { render, screen } from "@testing-library/react";
import { ContextGlobal } from "../Components/utils/Global.context";
import { ContextProvider } from '../Components/utils/Global.context';
import { createContext } from "react";


const mockData = {email:"Sincere@april.biz",
                    id:1,
                    name:"Leanne Graham",
                    phone:"1-770-736-8031 x56442",
                    username:"Bret",
                    website:"hildegard.org"}

// test("Card", () => {
//         const context = createContext("")
//         const mockData = {email:"Sincere@april.biz",
//                     id:1,
//                     name:"Leanne Graham",
//                     phone:"1-770-736-8031 x56442",
//                     username:"Bret",
//                     website:"hildegard.org"}

//         const component = render(
//             <ContextProvider>
//                 <Card key={context.id} children={context}/>
//             </ContextProvider>
//         );
//         console.log(component);
// });

test("Home", () => {
        const componenet = render(<Home />);
        console.log(componenet);
});