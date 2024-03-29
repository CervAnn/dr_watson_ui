import { createUser, hasErrored, addMessage, clearMessages} from './index'

describe("Actions", () => {
  it("should have a type of CREATE_USER", () => {
    let user = {
      id:1568825356538,
      firstName:"a",
      lastName:"a",
      feeling:"tired"
    };

    let expectedAction = {
      type: "CREATE_USER",
      user
    };

    expect(createUser(user)).toEqual(expectedAction);
  });

  it("should have a type of HAS_ERRORED", () => {
    let errorMsg = "Error Message"

    let expectedAction = {
      type: "HAS_ERRORED",
      errorMsg
    };
    expect(hasErrored(errorMsg)).toEqual(expectedAction);
  });

  it("should have a type of ADD_MESSAGE", () => {
    let message = {
      message: "New Message",
      isUser: false
    }
    let expectedAction = {
      type: "ADD_MESSAGE",
      message
    };

    expect(addMessage(message)).toEqual(expectedAction);
  });

    it("should have a type of CLEAR_MESSAGES", () => {
    let expectedAction = {
      type: "CLEAR_MESSAGES",
    };

    expect(clearMessages()).toEqual(expectedAction);
  });
});
