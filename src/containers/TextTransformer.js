import { connect } from 'react-redux'
import TextTransformer from '../components/TextTransformer'
import { transformToLowerCase, transformToUpperCase } from '../actions/textTransform'

const mapStateToProps = state => ({
    transformedValue: state.textTransform.transformedValue,
})

export default connect(mapStateToProps, { transformToLowerCase, transformToUpperCase })(TextTransformer)