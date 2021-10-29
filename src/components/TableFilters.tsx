import React, {MutableRefObject, RefObject, useState} from "react";
import {Flex} from "@chakra-ui/react";
import {TotalFilter} from "./TotalFilter";
import {GenderFilter} from "./GenderFilter";
import {AgeFilter} from "./AgeFilter";
import {NutrientFilter} from "./NutrientFilter";
import {FilterModal} from "./FilterModal";
import {useDisclosure} from "@chakra-ui/react";

export const TableFilters = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [focusRef, setFocusRef] = useState<React.MutableRefObject<HTMLDivElement | undefined>>();
    const nutrientRef: React.MutableRefObject<HTMLDivElement | undefined> = React.useRef<HTMLDivElement>()

    const handleClick = (ref: React.MutableRefObject<HTMLDivElement | undefined>) => {
        setFocusRef(ref);
        onOpen();
    };
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
                isOpen={isOpen}
                onClose={onClose}
                nutrientRef={nutrientRef}
                focusRef={nutrientRef}
            />
        </>
    );
};

