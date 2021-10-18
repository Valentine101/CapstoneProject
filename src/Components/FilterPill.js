import React, {useContext} from 'react'
import Badge from 'react-bootstrap/Badge'
import CloseButton from 'react-bootstrap/CloseButton'
import { FilterContext } from '../data/FilterContext';

const FilterPill = (props) => {
    
    const [filter, setFilter] = useContext(FilterContext)

    function removeFilter(removedFilter) {
        const newFilter = {...filter}
        newFilter[removedFilter] = ""
        setFilter(newFilter)
    }

    var newFilter = undefined
    if(props.filter === "classBefore") newFilter = "CLASS BEFORE"
    if(props.filter === "classAfter") newFilter = "CLASS AFTER"
    
    return (
        <Badge pill bg="primary">
            {newFilter || props.filter.toUpperCase()}: {props.value}
            <CloseButton onClick={() => removeFilter(props.filter)}/>
        </Badge>
    )
}

export default FilterPill