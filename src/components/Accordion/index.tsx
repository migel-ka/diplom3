import React, { useState } from 'react';
import { AccordionItem } from './Accordionitem';
import "./index.css";

interface FAQItem {
    q: string;
    a: string;
}

interface AccordionProps {
    faqList: FAQItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ faqList }) => {
    const [openId, setId] = useState<number | null>(null);

    return (
        <ul className='accordion'>
            {faqList.map((faqItem, id) => (
                <AccordionItem
                    onClick={() => (id === openId ? setId(null) : setId(id))}
                    faqItem={faqItem}
                    isOpen={id === openId}
                    key={id}
                />
            ))}
        </ul>
    );
};



