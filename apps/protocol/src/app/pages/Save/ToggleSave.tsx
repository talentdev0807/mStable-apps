import React, { FC, useMemo } from 'react'
import styled from 'styled-components'

import { useSelectedMassetState, SavingsContractState } from '@apps/base/context/data'
import { Toggle } from '@apps/components/core'

import { SaveVersion, useSelectedSaveVersion } from '../../context/SelectedSaveVersionProvider'

const ToggleContainer = styled.div`
  display: flex;
`

export const ToggleSave: FC<{ className?: string }> = ({ className }) => {
  const [selectedSaveVersion, setSelectedSaveVersion] = useSelectedSaveVersion()
  const massetState = useSelectedMassetState()
  const savingsContracts = massetState?.savingsContracts

  const options = useMemo(
    () =>
      (Object.values(savingsContracts ?? {}).filter(Boolean) as SavingsContractState[])
        .sort(sc => sc.version)
        .reverse()
        .map(({ version, current }) => ({
          title: `V${version}${current ? '' : version === SaveVersion.V1 ? ' (Deprecated)' : ' (Next)'}`,
          active: selectedSaveVersion === version,
          onClick() {
            setSelectedSaveVersion(version)
          },
        })),
    [savingsContracts, selectedSaveVersion, setSelectedSaveVersion],
  )

  return (
    <ToggleContainer className={className}>
      <Toggle options={options} />
    </ToggleContainer>
  )
}