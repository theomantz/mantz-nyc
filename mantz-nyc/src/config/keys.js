import keysDev from './keys_dev'
import keysProd from './keys_prod'

const keysProc = () => {
  if(process.env.NODE_ENV !== 'production') {
    return keysDev
  } else {
    return keysProd
  }
}

export default keysProc

