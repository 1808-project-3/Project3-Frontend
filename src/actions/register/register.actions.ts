export const registerTypes = {
    UPDATE_ERROR: 'UPDATE_ERROR',
    UPDATE_FIELDS: 'UPDATE_FIELDS'
  }


export const updateFields = (event: any) => {
    return {
      payload: {
        name: event.name,
        value: event.value
      },
      type: registerTypes.UPDATE_FIELDS
    }
  }

  export const updateError = (errorMessage: string) => {
    return {
      payload: {
        errorMessage
      },
      type: registerTypes.UPDATE_ERROR
    }
  }