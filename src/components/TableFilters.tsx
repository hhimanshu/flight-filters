import React, {useState} from "react";
import {Flex} from "@chakra-ui/react";
import {TotalFilter} from "./TotalFilter";
import {GenderFilter} from "./GenderFilter";
import {AgeFilter} from "./AgeFilter";
import {NutrientFilter} from "./NutrientFilter";
import {FilterModal} from "./FilterModal";

export const TableFilters = () => {
    const [focusRef, setFocusRef] = useState<React.RefObject<HTMLDivElement> | null>();
    const nutrientRef = React.useRef<HTMLDivElement>(null)

    const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
        setFocusRef(ref);
    };
    const onOpen = () => {}
    return (
        <>
            <Flex gridGap={4} bg={"white"} py={4} px={4} grow={1}>
                <TotalFilter applied={4} onClick={onOpen}/>
                <GenderFilter onClick={onOpen}/>
                <AgeFilter
                    startAge={31}
                    endAge={50}
                    ageUnit={"year"}
                    onClick={onOpen}
                />
                <NutrientFilter
                    selectedNutrients={[]}
                    onClick={() => handleClick(nutrientRef)}
                />
            </Flex>
            <FilterModal
                isOpen={focusRef !== null}
                onClose={() => setFocusRef(null)}
                nutrientRef={nutrientRef}
                ref={nutrientRef}
            />
        </>
    );
};

