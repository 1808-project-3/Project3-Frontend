import * as registerActions from '../../actions/register/register.actions';
import { registerTypes } from "../../actions/register/register.actions";
// import { mockResponse } from "../../test-helper"

describe('sign-in actions', () => {

    it('should dispatch proper payload for update fields', () => {
        const event = {
            name: 'FirstName',
            value: 'justin'
        };
        const expectedAction = {
            payload: {
                name: event.name,
                value: event.value
            },
            type: registerTypes.UPDATE_FIELDS
        }
        expect(registerActions.updateFields(event)).toEqual(expectedAction);
    });

    it('should dispatch proper payload for update error', () => {
        const errorMessage = 'invalid password';
        const expectedAction = {
            payload: {
                errorMessage
            },
            type: registerTypes.UPDATE_ERROR
        }
        expect(registerActions.updateError(errorMessage)).toEqual(expectedAction);
    });

    it('should dispatch proper payload for clear fields', () => {
        const expectedAction = {
            payload: {
            },
            type: registerTypes.CLEAR_FIELDS
        }
        expect(registerActions.clearFields()).toEqual(expectedAction);
    });



});