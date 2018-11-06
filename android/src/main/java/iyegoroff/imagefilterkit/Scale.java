package iyegoroff.imagefilterkit;

import com.facebook.infer.annotation.Assertions;

import javax.annotation.Nullable;

public class Scale {

  public enum Mode {
    UP,
    DOWN
  }

  private Scale() {

  }

  public static class WithMode extends Scale {
    public final Mode mode;

    WithMode(Mode mode) {
      this.mode = mode;
    }
  }

  public static class WithMatch extends Scale {
    public final @Nullable String name;

    WithMatch(@Nullable String name) {
      this.name = name;
    }
  }

  @Override
  public String toString() {
    if (this instanceof WithMode) {
      return String.format("Scale.WithMode(%s)", ((WithMode) this).mode.toString());
    }

    if (this instanceof WithMatch) {
      return String
        .format("Scale.WithMatch(%s)", ((WithMatch) this).name);
    }

    throw Assertions.assertUnreachable("ImageFilterKit: unknown Scale subclass");
  }
}