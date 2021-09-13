import React, { FC, useMemo } from 'react'
import styled from 'styled-components'

import { CountUp, ThemedSkeleton } from '@apps/components/core'
import { TokenIcon } from '@apps/components/icons'

import { useStakedTokenQuery } from '../../context/StakedTokenProvider'

interface Balance {
  symbol?: string
  amount: number
  decimals?: number
  suffix?: string
}

interface GroupProps {
  label: string
  balances?: Balance[]
}

const StyledTokenIcon = styled(TokenIcon)`
  width: 2rem;
  height: auto;
`

const GroupContainer = styled.div`
  > :first-child {
    margin-bottom: 1rem;
  }
  > :last-child {
    display: flex;
    gap: 1rem;
    > * {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

const Group: FC<GroupProps> = ({ balances, label }) => (
  <GroupContainer>
    <div>{label}</div>
    <div>
      {balances ? (
        balances.map(({ amount, symbol, suffix, decimals }, key) => (
          <div key={symbol ?? key}>
            {symbol && <StyledTokenIcon symbol={symbol} />}
            <CountUp end={amount} suffix={suffix} decimals={decimals} />
          </div>
        ))
      ) : (
        <ThemedSkeleton height={20} width={80} />
      )}
    </div>
  </GroupContainer>
)

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 1.5rem;
  border: 1px ${({ theme }) => theme.color.background[2]} solid;
  padding: 1.5rem;
`

export const StakeBalances: FC = () => {
  const { data } = useStakedTokenQuery()

  const { stake, votingPower, rewardsEarned } = useMemo<{ stake?: Balance[]; votingPower?: Balance[]; rewardsEarned?: Balance[] }>(() => {
    const account = data?.stakedToken?.accounts?.[0]
    if (!data || !account) {
      return {}
    }

    const {
      balance: { rawBD, votesBD },
      rewards,
    } = account
    return {
      // TODO simple rewards earned
      stake: [{ amount: rawBD.simple, symbol: data.stakedToken.stakingToken.symbol }],
      votingPower: [{ amount: votesBD.simple, symbol: 'vMTA' }],
      rewardsEarned: [{ symbol: data.stakedToken.stakingRewards.rewardsToken.symbol, amount: parseInt(rewards) / 1e18 }],
    }
  }, [data])

  // TODO calculate rewards APY
  const rewardsApy = [{ suffix: '%', amount: 23.02 }]

  return (
    <Container>
      <Group label="My Stake" balances={stake} />
      <Group label="My Voting Power" balances={votingPower} />
      <Group label="Rewards Earned" balances={rewardsEarned} />
      <Group label="APY" balances={rewardsApy} />
    </Container>
  )
}