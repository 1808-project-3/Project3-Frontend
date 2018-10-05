import * as signInActions from '../../actions/sign-in/sign-in.actions';
import { signInTypes } from "../../actions/sign-in/sign-in.types";
import { mockResponse } from "../../test-helper"

describe('sign-in actions', () => {
    it('should create an action to update username', () => {
        const userId = 'username123';
        const expectedAction = {
            payload: {
                userId
            },
            type: signInTypes.UPDATE_USERNAME
        }
        expect(signInActions.updateUsername(userId)).toEqual(expectedAction);
    });

    it('should create an action to update password', () => {
        const pass = 'pass';
        const expectedAction = {
            payload: {
                pass
            },
            type: signInTypes.UPDATE_PASSWORD
        }
        expect(signInActions.updatePassword(pass)).toEqual(expectedAction);
    });

    it("should create an action to login user successfully", async () => {
        const dispatch = jest.fn();
        const response = `{
            "userId": 1,
            "username": "user123",
            "firstName": "John",
            "lastName": "Smith",
            "email": "user123@gmail.com"
        }`
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve(mockResponse(200, "OK", response)));
        const event: any = { preventDefault: () => null };
        const credentials: any = { credentials: { pass: 'pass', userId: 'user123' } }
        await signInActions.login(event, credentials)(dispatch);
        expect(dispatch).toBeCalledWith(
            {
                payload: {
                    currentUser: response,
                    errorMessage: ''
                },
                type: signInTypes.LOGIN
            }
        );
    });

    it("should create an action to display an error after invalid credentials used for login", async () => {
        const dispatch = jest.fn();
        const response = "Unauthorized"
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve(mockResponse(401, "Unauthorized", response)));
        const event: any = { preventDefault: () => null };
        const credentials: any = { credentials: { pass: 'pass', userId: 'user123' } }
        await signInActions.login(event, credentials)(dispatch);
        expect(dispatch).toBeCalledWith(
            {
                payload: {
                    currentUser: null,
                    errorMessage: 'Invalid username or password'
                },
                type: signInTypes.LOGIN
            }
        );
    });

    it("should create an action to display an error after login failed because of server error", async () => {
        const dispatch = jest.fn();
        const response = "Internal Server Error"
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve(mockResponse(500, "Internal Server Error", response)));
        const event: any = { preventDefault: () => null };
        const credentials: any = { credentials: { pass: 'pass', userId: 'user123' } }
        await signInActions.login(event, credentials)(dispatch);
        expect(dispatch).toBeCalledWith(
            {
                payload: {
                    currentUser: null,
                    errorMessage: 'Failed to login at this time'
                },
                type: signInTypes.LOGIN
            }
        );
    });
});