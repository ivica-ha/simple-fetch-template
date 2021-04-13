import React from "react";

export default class List extends React.Component {

    render() {
        return (
            <table>
                <tbody>
                    {/*umjesto indksa je bolje staviti neki jedinstveni ID*/}
                    {this.props.list.map((song, index) =>
                        <tr key={index}>
                            <td>{song.artistName}</td>
                            <td>{song.trackName}</td>
                            <td>{song.collectionCensoredName}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}