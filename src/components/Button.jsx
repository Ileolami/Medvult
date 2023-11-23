import { ConnectButton } from '@rainbow-me/rainbowkit';
export const ConnectBtn = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                 <div className='flex justify-center items-center'>
                   <button onClick={openConnectModal} type="button" className='shadow-purple-button-first bg-purple-button-second m-7 w-36 rounded-lg h-10 shadow-2xl hover:bg-purple-button-first hover:cursor-pointer'>
                    Connect Wallet
                  </button>
                 </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" >
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button 
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export const SignUpButton = (props) => {
  return (
    <div className='flex items-center justify-center'>
      <button  className='bg-purple-button-second m-7 w-36 rounded-lg h-10 hover:bg-purple-button-first hover:cursor-pointer shadow-2xl shadow-purple-button-first' >{props.buttonText}</button>
    </div>
  )
}
