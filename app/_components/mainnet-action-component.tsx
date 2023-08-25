"use client";

import { useEffect } from "react";
import { usePrepareContractWrite } from "wagmi";
import { mainnet } from "wagmi/chains";

export function MainnetActionComponent() {
  // this is just a random free mint i found on mint.fun i do not endorse whatever it is
  const { error } = usePrepareContractWrite({
    chainId: mainnet.id,
    address: "0x8d0802559775C70fb505f22988a4FD4A4f6D3B62",
    abi: [
      {
        inputs: [
          {
            internalType: "string",
            type: "string",
          },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ] as const,
    functionName: "mint",
    args: ["11"],
  });

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return <div>this component has a mainnet usePrepareContractWrite in it</div>;
}
