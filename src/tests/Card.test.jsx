import Card from "../Components/Card";
import { render, screen } from "@testing-library/react";



const mockData = {email:"Sincere@april.biz",
                    id:1,
                    name:"Leanne Graham",
                    phone:"1-770-736-8031 x56442",
                    username:"Bret",
                    website:"hildegard.org"}

test("Card", () => {
        render(<Card children={mockData}/>);
        screen.debug();
        expect(true).toBe(true);

});