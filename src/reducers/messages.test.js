import { messages } from './messages';

describe('Messages', () => {

  it('should return the default state', () => {
    let expected = [];
    let result = messages(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should add a message per the action', () => {
    let mockAction = {
      type: 'ADD_MESSAGE',
      message:
        { 
          message: "Hey!", 
          isUser: false 
        }
    };

    let expected = [{"isUser": undefined, "message": {"isUser": false, "message": "Hey!"}}]

    let result = messages([], mockAction);
    expect(result).toEqual(expected)
  });

  it('should clear messages per the action', () => {
    let mockAction = {
      type: 'CLEAR_MESSAGES',
    };

    let expected = []

    let result = messages([], mockAction);
    expect(result).toEqual(expected)
  });
})