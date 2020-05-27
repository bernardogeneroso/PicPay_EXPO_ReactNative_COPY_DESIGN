import React from 'react';

import { Wrapper, Content } from './styles';

import WalletHeader from '../../components/WalletHeader';
import WalletHeaderDown from '../../components/WalletHeaderDown';
import WalletFormasPagamento from '../../components/WalletFormasPagamento';
import WalletAddCartCredit from '../../components/WalletAddCartCredit';

export default function Home() {  
    return (
        <>
            <Wrapper>
                <WalletHeader />
                <WalletHeaderDown />
            </Wrapper>
            <Content>
                <WalletFormasPagamento />
                <WalletAddCartCredit />
            </Content>
        </>
    );
}