/**
 * Inspired by Penny's ConfirmOperation component
 * https://gitlab.com/vincenttunru/penny/-/blob/main/src/components/ConfirmOperation.tsx
 */

import React, { FC, FormEventHandler, useState } from 'react'
import Modal from 'react-modal'

interface Props {
  confirmString: string
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmRemoveOffer: FC<Props> = ({
  confirmString,
  onConfirm,
  onCancel,
}) => {
  const [promptOpen, setPromptOpen] = useState(true)
  const [enteredString, setEnteredString] = useState('')

  const handleSubmit: FormEventHandler = event => {
    event.preventDefault()

    if (enteredString === confirmString) {
      onConfirm()
    }
  }

  return (
    <Modal
      isOpen={promptOpen}
      onRequestClose={() => setPromptOpen(false)}
      onAfterClose={onCancel}
      contentLabel="Are you sure?"
      closeTimeoutMS={150}
      overlayClassName={{
        base: 'bg-opacity-90 bg-gray-900 fixed top-0 left-0 bottom-0 right-0 z-5000',
        afterOpen: '',
        beforeClose: '',
      }}
    >
      <h1>Are you sure you want to remove offer?</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label>
          Please enter{' '}
          <samp>
            <kbd>{confirmString}</kbd>
          </samp>{' '}
          below
        </label>
        <input
          className="border rounded"
          type="text"
          value={enteredString}
          onChange={e => setEnteredString(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          disabled={confirmString !== enteredString}
          className="disabled:opacity-50 bg-red-400 disabled:cursor-not-allowed cursor-pointer"
        >
          Confirm
        </button>
        <button className="border" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </Modal>
  )
}

export default ConfirmRemoveOffer
/*
      className={{
        base: '',
        afterOpen: '',
        beforeClose: '',
      }}
      */
