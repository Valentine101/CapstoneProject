import React, {useContext} from 'react'
import Badge from 'react-bootstrap/Badge'
import CloseButton from 'react-bootstrap/CloseButton'
import { FilterContext } from '../data/FilterContext';
import Button from 'react-bootstrap/Button';

const FilterPill = (props) => {
    
    const [filter, setFilter] = useContext(FilterContext)

    function removeFilter(removedFilter) {
        const newFilter = {...filter}
        newFilter[removedFilter] = ""
        setFilter(newFilter)
    }

    var newFilter = undefined
    if(props.filter === "beforeClass") newFilter = "CLASS BEFORE"
    if(props.filter === "afterClass") newFilter = "CLASS AFTER"
    
    return (
        <Badge pill bg="primary">
            {newFilter || props.filter.toUpperCase()}: {props.value}
            <CloseButton onClick={() => removeFilter(props.filter)}/>
        </Badge>
    )
}

const FilterPills = () => {
    
    const [filter, setFilter] = useContext(FilterContext)

    const clearFilter = () => {
        var newFilter = {...filter}
        for (const f in newFilter) {
            newFilter[f] = ""
        }
        setFilter(newFilter)
    }

    const filters = Object.getOwnPropertyNames(filter).filter(f => filter[f] !== "")
    
    return (
        <>
            {filters.length !== 0 && 
                <Button onClick={clearFilter}>Clear</Button>
            }
            {filters.map((f,index) =>
                <FilterPill key={"filter"+index} filter={f} value={filter[f]}/>
            )}
        </>
    )
}

export default FilterPills