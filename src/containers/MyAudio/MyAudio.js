import {connect} from 'react-redux';

import {fetchMyAudio, updateMyAudio} from '../../actions/audio';
import {playerPlayTrack, playerPlayPause, playerSetTrack} from '../../actions/player';

import AudioList from '../../components/AudioList/AudioList';

class MyAudio extends AudioList {}

const mapStateToProps = state => ({
  audios: state.audio.all,
  ids: state.audio.my.ids,
  offset: state.audio.my.offset,
  audiosLoading: state.audio.loading,
  audiosError: state.audio.error,
  playerCurrentTrack: state.player.current,
  playerPlaying: state.player.playing
});

const mapDispatchToProps = dispatch => ({
  fetchAudio: (offset, count) => dispatch(fetchMyAudio(offset, count)),
  updateAudio: (offset, count) => dispatch(updateMyAudio(offset, count)),
  playTrack: id => dispatch(playerPlayTrack(id)),
  setTrack: id => dispatch(playerSetTrack(id)),
  playPlayPause: () => dispatch(playerPlayPause())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAudio);
