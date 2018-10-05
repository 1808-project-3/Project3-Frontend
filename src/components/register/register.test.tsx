import * as React from 'react';
import { shallow } from "enzyme";
import  RegisterComponent  from "./register.component";
import { store } from '../../Store';



describe('<RegisterComponent />', () => {
    const filler: any = null;

    it ('renders one <RegisterComponent />', () => {
        const wrapper = shallow(<RegisterComponent store={store} {...filler} />)
        expect(wrapper.find(RegisterComponent)).toHaveLength(0);
    })


})