// src/LinkPage.js
import React from 'react';
import { PageLink } from './styles';

function LinkPage({ children, link }) {
    return (
        <PageLink href={link}>
            {children}
        </PageLink>
    );
}

export default LinkPage;
