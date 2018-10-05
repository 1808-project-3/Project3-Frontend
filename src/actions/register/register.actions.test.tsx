import * as registerActions from '../../actions/register/register.actions';
import { registerTypes } from "../../actions/register/register.actions";
// import { mockResponse } from "../../test-helper"

describe('sign-in actions', () => {

    it('should dispatch proper payload for update fields', () => {
        const userId = 'username123';
        const expectedAction = {
            payload: {
                userId
            },
            type: registerTypes.UPDATE_FIELDS
        }
        expect(registerActions.updateFields(userId)).toEqual(expectedAction);
    });



});