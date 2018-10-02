export const registerTypes = {
    UPDATE_FIELDS: 'UPDATE_FIELDS',
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