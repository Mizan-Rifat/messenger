export const postAction = (actions, url, formData, dispatch, method = 'post', headers = {}) => {

    return new Promise((resolve, reject) => {


        if (actions.hasOwnProperty('loading')) {
            dispatch(actions.loading)
        }


        axios.get('/sanctum/csrf-cookie')
            .then(response => {

                axios({
                    method: method,
                    url: url,
                    data: formData,
                    headers: headers
                })
                    .then(response => {
                        console.log({ response })
                        if (Array.isArray(actions.success)) {
                            actions.success.map(item => {
                                dispatch(item(response.data.data))
                            })
                        } else {
                            dispatch(actions.success(response.data.data))
                        }

                        resolve(response.data.message)
                    }).catch(error => {
                        console.log({ error })
                        const err = {
                            errors: error.response.data.hasOwnProperty('errors') ? error.response.data.errors : {},
                            message: error.response.data.message,
                            errorCode: error.response.status
                        }

                        dispatch(actions.error(err))

                        reject(err);

                    })
            })
    })
};

export const getAction = (actions, url, dispatch) => (

    new Promise((resolve, reject) => {

        if (actions.hasOwnProperty('loading')) {
            dispatch(actions.loading)
        }


        axios.get(url)
            .then(response => {
                console.log('acton_response', response)
                if (actions.hasOwnProperty('success')) {
                    if (Array.isArray(actions.success)) {
                        actions.success.map(item => {
                            dispatch(item(response.data.data))
                        })
                    } else {
                        dispatch(actions.success(response.data.data))
                    }
                }

                resolve(response.data.data)
            }).catch(error => {

                console.log('acton_error', error)
                const err = {
                    errors: error.response.data.hasOwnProperty('errors') ? error.response.data.errors : {},
                    message: error.response.data.message,
                    errorCode: error.response.status
                }


                dispatch(actions.error(err))
                reject(err);

            })
    })
);
