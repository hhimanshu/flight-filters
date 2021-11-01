import React, {RefObject, useState} from "react";
import {Flex} from "@chakra-ui/react";
import {TotalFilter} from "./TotalFilter";
import {GenderFilter} from "./GenderFilter";
import {AgeFilter} from "./AgeFilter";
import {NutrientFilter} from "./NutrientFilter";
import {FilterModal} from "./FilterModal";
import {FocusableElement} from "@chakra-ui/utils"

export const TableFilters = () => {
    const totalFiltersRef = React.useRef<HTMLDivElement>(null);
    const genderRef = React.useRef<HTMLDivElement>(null);
    const ageRef = React.useRef<HTMLDivElement>(null);
    const nutrientsRef = React.useRef<HTMLDivElement>(null);
    const [focusRef, setFocusRef] = useState<RefObject<HTMLDivElement | FocusableElement> | undefined>(
        nutrientsRef
    );

    const handleClick = (ref: RefObject<HTMLDivElement>) => setFocusRef(ref);

    return (
        <>
            <Flex gridGap={4} bg={"white"} py={4} px={4} grow={1}>
                <TotalFilter applied={4} onClick={() => handleClick(totalFiltersRef)}/>
                <GenderFilter onClick={() => handleClick(genderRef)}/>
                <AgeFilter
                    startAge={31}
                    endAge={50}
                    ageUnit={"year"}
                    onClick={() => handleClick(ageRef)}
                />
                <NutrientFilter
                    selectedNutrients={[]}
                    onClick={() => handleClick(nutrientsRef)}
                />
            </Flex>
            <FilterModal
                isOpen={focusRef !== undefined}
                onClose={() => setFocusRef(undefined)}
                totalFiltersRef={totalFiltersRef}
                genderRef={genderRef}
                ageRef={ageRef}
                nutrientRef={nutrientsRef}
                focusRef={focusRef}
            />
        </>
    );
};

