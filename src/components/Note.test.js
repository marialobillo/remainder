import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Note from './Note';

const props = { note: { text: 'test note' } }

describe('Note', () => {
  let note = mount(<Note note={props.note} />);

  it('renders the note text', () => {
    console.log(note.debug());
    expect(note.find('p').text()).toEqual('test note');
  });
});
