import { Suspense } from "react";
import propTypes from 'prop-types'

function LazyComponent({component: Component, ...rest}){
    return(
        <Suspense fallback = {<div>loading...</div>}>
            <Component{...rest}/>
        </Suspense>
    )
}

LazyComponent.propTypes={
    component: propTypes.elementType.isRequired
}

export default LazyComponent;